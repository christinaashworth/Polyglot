import React from "react";

export const Student = ({student}) => (
    <section className="class">
        <h3 className="student__name">{student.name}</h3>
        {/* <div className="customer__address">{props.customer.address}</div> */}
    </section>
);