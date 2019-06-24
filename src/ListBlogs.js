import React from 'react';
import BlogCard from './BlogCard';


class ListBlogs extends React.Component {
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

  limpiarForm = () =>{
    event.target.value= "";
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
          <div className="col col-12 col-md-9">
            {this.props.blog.map(blog => <BlogCard blog={blog} key={blog.id} />)}
          </div>
          <div className="col col-12 col-md-3">
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal2">Nuevo</button>
            </div>
            <hr />
            <h5 className="card-title">Archivo</h5>
            <ul className="list-group list-group-item-info">
              <hr />
              <h2 className="card-title">2019</h2>
              <hr />
              <li className="list-group-item">
                <h6>Cras justo odio</h6>
              </li>
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
              <hr />
              <h2 className="card-title">2018</h2>
              <hr />
              <li className="list-group-item">
                <h6>Cras justo odio</h6>
              </li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>

        {/*  MODAL */}
        <div className="modal fade" id="myModal2" role="dialog">
          <div className="modal-dialog">

            {/* MODAL CONTENT */}
            <div className="modal-content">
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="text">Titulo</label>
                  <input type="text" className="form-control" onChange={this.changeTitulo}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="text">Familia</label>
                  <input type="text" className="form-control" onChange={this.changeFamilia} value=""></input>
                </div>
                <div className="form-group">
                  <label htmlFor="inputFecha">Fecha de Adopcion</label>
                  <input type="date" className="form-control" onChange={this.changeFecha} value=""></input>
                </div>
                <div className="form-group">
                  <label htmlFor="text">Foto</label>
                  <br />
                  <br />
                  <input id="file" type="file" className="form-control" accept="image/png, image/jpeg" onChange={this.changeFoto} value=""/>
                  {/* <label htmlFor="text">Foto</label> */}
                  {/* <input type="text" className="form-control" onChange={this.changeFoto}></input> */}
                </div>
                <div className="form-group">
                  <label htmlFor="text">Comentario</label>
                  <textarea type="text" className="form-control" onChange={this.changeComentario} value=""></textarea>
                </div>
                <div className="checkbox">
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

export default ListBlogs;