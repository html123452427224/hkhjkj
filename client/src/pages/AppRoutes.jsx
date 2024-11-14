import {BrowserRouter, Routes,Route} from "react-router-dom";


import React from 'react'
import Home from "./Home/Home";
import {ViewAll as ViewMonkey} from "./Monkey/ViewAll";
import {View as ViewMonkeys} from "./Monkey/View";
import {UpdateForm as UpdateMonkey} from "./Monkey/UpdateForm";
import {CreateForm as CreateMonkey} from "./Monkey/CreateForm";
import {Created as CreatedMonkey} from "./Monkey/Created"

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
   </Routes>
   </BrowserRouter>
   </>
  )
}
