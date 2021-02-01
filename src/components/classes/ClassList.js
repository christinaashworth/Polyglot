// class list shows entire list of students
// teachers can delete individual students
// send bulletin button (opens message form)

import React, { useContext, useEffect } from "react";
import { StudentContext } from "./StudentProvider";
import { CustomerCard } from "./Customer";
import "./Customer.css";

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers");
    getCustomers();

  }, []);


  return (
    <div className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })
      }
    </div>
  );
};