import React from 'react'
import { useForm } from "react-hook-form"


export default function HookForm() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    console.log(watch('example')) // watch input value by passing the name of it
    return (
        <div className="modal-content">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Crear producto
                        </h5>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="col-form-label"
                                >
                                    Nombre:
                                        </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={this.state.product.name} onChange={this.handleChange}
                                    ref={register({ required: true })}
                                    autoFocus
                                    required />
                                {errors.name && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="reference"
                                    className="col-form-label"
                                >
                                    Referencia:
                                        </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="reference"
                                    name="reference"
                                    value={this.state.product.reference} onChange={this.handleChange}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="price"
                                    className="col-form-label"
                                >
                                    Precio:
                                        </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    value={this.state.product.price} onChange={this.handleChange}
                                    required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="weight"
                                    className="col-form-label"
                                >
                                    Peso:
                                        </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="weight"
                                    name="weight"
                                    value={this.state.product.weight} onChange={this.handleChange}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="category"
                                    className="col-form-label"
                                >
                                    Categoría:
                                        </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    name="category"
                                    value={this.state.product.category} onChange={this.handleChange}
                                    required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="stock"
                                    className="col-form-label"
                                >
                                    Stock:
                                        </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="stock"
                                    name="stock"
                                    value={this.state.product.stock} onChange={this.handleChange}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="creation-date"
                                    className="col-form-label"
                                >
                                    Fecha de creación:
                                        </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="creation-date"
                                    name="creation_date"
                                    value={this.state.product.creation_date} onChange={this.handleChange}
                                    required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="last-sale-date"
                                    className="col-form-label"
                                >
                                    Fecha última venta:
                                        </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="last-sale-date"
                                    name="last_sale_date"
                                    value={this.state.product.last_sale_date} onChange={this.handleChange}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                    htmlFor="description"
                                    className="col-form-label"
                                >
                                    Descripción:
                                        </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={this.state.product.description} onChange={this.handleChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Crear
                        </button>
                </div>
            </form>
        </div>
    )
}
