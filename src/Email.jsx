import React from "react";
import { useFormik } from "formik";

const validate = values => {
    const errors = {};
    if (!values.email) {
    errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
    }
    return errors;
    };

const Email = ({validation}) => {

    const formik = useFormik({
        initialValues: {
            email: "",
        },

        validate,
        onSubmit: (values) => {
            validation(true,formik.values.email)
        },
    });

    return (<>
        <div className="email">
            <form onSubmit={formik.handleSubmit}>
                <label>Email address</label>
                {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                <input
                    name="email"
                    type="email"
                    placeholder="email@company.com"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    style={formik.errors.email && {color: 'hsl(4, 100%, 67%)', border : '1px solid hsl(4, 100%, 67%)', backgroundColor: 'hsl(4, 100%, 67%,0.25)'}}
                />
                <button type="submit">Subscribe to monthly newsletter</button>
            </form>
        </div>
        </>
    );
};

export default Email;

