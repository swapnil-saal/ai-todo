import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './TodoForm.css';

interface TodoFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, description: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ isOpen, onClose, onAdd }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onAdd(values.title, values.description);
      resetForm();
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}

          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;