import { ComentarioService } from './../../services/comentario.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  public comentarios;
  public comentarioForm;
  @Input() quartoId;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private comentarioService: ComentarioService) {
    this.comentarioForm = this.formBuilder.group({
      usuarioId: 1,
      quartoId: '',
      texto: ['', [Validators.required]],
      avaliacao: 0,
      data: '',
    });
  }

  ngOnInit() {
    this.getComentarios();
    this.comentarioForm.controls.quartoId.setValue(this.quartoId);
  }

  public comentar() {
    if (this.comentarioForm.valid) {
      this.comentarioForm.controls.data.setValue(new Date);
      this.comentarioService.cadastrar(this.comentarioForm.value).subscribe(() => this.getComentarios());
    } else {
      this.toastr.error('Informe um Comentário');
    }
  }

  public avaliar(event) {
    this.comentarioForm.controls.avaliacao.setValue(event.rating);
  }

  public getComentarios() {
    this.comentarioService.getByQuartoId(this.quartoId).subscribe(comentarios => this.comentarios = comentarios);
  }

}
