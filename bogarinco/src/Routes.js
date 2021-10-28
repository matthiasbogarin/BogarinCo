import { NavBar } from "./components/NavBar";
import { Dashboard } from "./views/Dashboard";
import { Clients } from "./views/Clients";
import { Files } from "./views/Files";
import { Manage } from "./views/Manage";
import { Tools } from "./views/Tools";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
    return (
        <div style={{ margin: "0", padding: "0"}}>
            <NavBar />
            <Switch>
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/">
                    <Redirect to="Dashboard" />
                </Route>
                <Route exact path="/Tools" component={Tools} />
                <Route exact path="/Clients" component={Clients} />
                <Route exact path="/Manage" component={Manage} />
                <Route exact path="/Files" component={Files} />
            </Switch>
        </div>
    )
}