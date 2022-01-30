import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Hotkeys from 'react-hot-keys';
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Dashboard from "./pages/dashboard/Dashboard"
import { RequireAuth } from './useAuth'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import AddTransactions from './AddTransction'

const createApolloClient = (authToken: string | null) => {
    return new ApolloClient({
        link: new HttpLink({
            uri: process.env.REACT_APP_BACKEND_URL,
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }),
        cache: new InMemoryCache(),
    });
};
export default function App() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const idToken = localStorage.getItem('token')
    const [client] = React.useState(createApolloClient(idToken));
    return (
        <ApolloProvider client={client}>
            <Hotkeys
                keyName="shift+n,alt+s"
                onKeyUp={handleOpen}
            >
                <AddTransactions open={open} setOpen={setOpen} />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route
                            path="/dashboard"
                            element={
                                <RequireAuth>
                                    <Dashboard />
                                </RequireAuth>
                            }
                        />
                    </Routes>
                </div>
            </Hotkeys>
        </ApolloProvider>
    );
}
