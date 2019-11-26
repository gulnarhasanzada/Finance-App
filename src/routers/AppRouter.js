import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "../components/Header";
import AddNewEmployeePage from "../components/AddNewEmployeePage";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import SalariesTablePage from "../components/SalariesTablePage";
import SettingsPage from "../components/SettingsPage";

const AppRoutes = ()=> (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/add" component={AddNewEmployeePage} />
                <Route path="/table" component={SalariesTablePage} />
                <Route path="/settings" component={SettingsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoutes;