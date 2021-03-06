import React from 'react';
import './blogList.css';
import BlogCard from './BlogCard';

class BlogsList extends React.Component {
  constructor(props) {
    super(props);
    this.unBlog = []
  }

  changeTitulo = (event) => {
    this.unBlog.titulo = event.target.value;
  }
  changeFamilia = (event) => {
    this.unBlog.familia = event.target.value;
  }
  changeFecha = (event) => {
    this.unBlog.fecha = event.target.value;
  }
  changeFoto = (event) => {
    var str = event.target.value;
    var res = str.replace(/^C:\\fakepath\\/, "assets/"); //me encontre con que la imagen se queria guardar en c:\fakepath
    this.unBlog.foto = res;
  }
  changeComentario = (event) => {
    this.unBlog.comentario = event.target.value;
  }

  limpiarForm = () => {

  }


  /* WriteFile(a,b)
  {
     var fso  = new ActiveXObject("Scripting.FileSystemObject");
     fso.CopyFile(a,b, 1);
     fso.CopyFile("C:\\source.txt","C:\\target.txt", 1);
  } */

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-9 col-md-9">          
          <hr />  
            {this.props.blog.map(blog => <BlogCard blog={blog} key={blog.id} />)}
            <hr />
            <br />
          </div>
          <div className="col col-12 col-sm-3 col-md-3">
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal2">Nuevo</button>
            </div>
            <hr />
           
            <aside className="serchVerticalR col d-none d-md-block">
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_01.jpg" className="card-img-top" alt="... "></img></a>
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_02.jpg" className="card-img-top" alt="... "></img></a>
            <hr />
          </aside>
          </div>
        </div>

        {/*  MODAL */}
        <div className="modal fade" id="myModal2" role="dialog">
          <div className="modal-dialog" id="ModalFormBlog">

            {/* MODAL CONTENT */}
            <div className="modal-content">
              <form  id="ModalFormBlog" className="was-validated">
                <div className="form-group">
                  <label htmlFor="uname">Titulo</label>
                  <input type="text" className="form-control" id="titu" onChange={this.changeTitulo} placeholder="Ingrese un Titulo ..." name="titu" required></input>
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  <label htmlFor="text">Familia</label>
                  <input type="uname" className="form-control" id="fami" onChange={this.changeFamilia} placeholder="Ingrese Nombre/Apellido de su Familia" name="fami" required></input>
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputFecha">Fecha de Adopcion</label>
                  <input type="date" className="form-control" id="fech" name="fech" onChange={this.changeFecha} required></input>
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  <label htmlFor="text">Foto</label>
                  <br />
                  <br />
                  <input id="file" type="file" className="form-control" accept="image/png, image/jpeg" onChange={this.changeFoto}/>                 
                </div>
                <div className="form-group">
                  <label htmlFor="text">Comentario</label>
                  <textarea type="text" className="form-control" placeholder="Comente porque adopto..." onChange={this.changeComentario} required></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={(e) => this.props.addToBlog(this.unBlog, e)}>Guardar</button>
              </form>             
              <button type="button" className="btn btn-warning btn-block" data-dismiss="modal" onClick={this.limpiarForm}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogsList;