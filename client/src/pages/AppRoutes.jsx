import {BrowserRouter, Routes,Route, Router} from "react-router-dom";


import React from 'react'
import Home from "./Home/Home";
import {ViewAll as ViewMonkey} from "./Monkey/ViewAll";
import {View as ViewMonkeys} from "./Monkey/View";
import {UpdateForm as UpdateMonkey} from "./Monkey/UpdateForm";
import {CreateForm as CreateMonkey} from "./Monkey/CreateForm";
import {Created as CreatedMonkey} from "./Monkey/Created";


import { CreatedDriver as F1CreatedOne } from "./F1Drivers/CreatedDriver";
import { CreateF1driverForm as F1Form} from "./F1Drivers/CreateF1driverForm";

import { UpdateFormF1 as F1Update } from "./F1Drivers/UpdateFormF1";
import { ViewAll as F1ViewAll } from "./F1Drivers/ViewAll";
import { ViewF1 as F1View} from "./F1Drivers/ViewF1";

export default function AppRoutes() {
  return (
   
   <>
   <BrowserRouter>
   <Routes>


    <Route path="/" element={<Home/>} />

    <Route path="/view-all" element={<ViewMonkey/>} />
    <Route path="/view-monkey/:id" element={<ViewMonkeys/>} />
    <Route path="/update-monkey/:id" element={<UpdateMonkey/>} />
    <Route path="/create-monkey" element={<CreateMonkey/>} />
    <Route path="/created-monkey/:id" element={<CreatedMonkey/>} />


    <Router path="/create-driver" element={<F1Form/>}> </Router>
    <Router path="/created-driver/:id" element={<F1CreatedOne/>}> </Router>
    <Router path="/update-driver/:id" element={<F1Update/>}></Router>
    <Router path="/view-all-drivers" element={<F1ViewAll/>}></Router>
    <Router path="/view-driver/:id" element={<F1View/>}></Router>
 



    



   </Routes>
   </BrowserRouter>
   </>
  )
}
