import React from 'react'



class BlogCard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col col-12 col-md-4">
                    <div className="featured-thumbnail">
                        <img src={this.props.blog.foto} className="img-fluid" alt="asdfd" data-toggle="modal" data-target="#myModal"></img>
                    </div>
                </div>
                <div className="col col-12 col-md-8">
                    <h5 className="card-title">{this.props.blog.titulo}</h5>
                    <p className="card-text"><small className="text-muted">FAMILIA {this.props.blog.familia} | Última actualización {this.props.blog.fecha}</small></p>
                    <hr />
                    <p className="card-text">{this.props.blog.comentario}</p>
                    <hr />
                </div>

                {/*  MODAL */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                        {/* MODAL CONTENT */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">{this.props.blog.titulo}</h3>
                            </div>
                            <div className="modal-body">
                                <img src={this.props.blog.foto} className="img-fluid" alt="asdfd"></img>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success btn-block btn" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogCard