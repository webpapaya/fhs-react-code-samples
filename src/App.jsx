import React from 'react';
import './App.css';


const Fragment1 = <>test</>
const Fragment2 = <React.Fragment>test</React.Fragment>
// Fragment1 === Fragment2

const UserList = ({children, users}) => {
    return (
        <>
            {children}
            <ul>
                {users.map((user) => {
                    return <li key={user.name}>{user.name}</li>
                })}
            </ul>
        </>
    )
}

class AppClassComponent extends React.Component {
    render() {
        return (
            <div>
                <button type="button">
                    Button 1
                </button>

                <button type="button">
                    Button 2
                </button>
            </div>
        )
    }
}

const App = () => {
    const userId = 2
    const isToday = false

    const users = [
        {name: "a"},
        {name: "b"},
        {name: "c"},
        {name: "d"},
    ]

    return (
        <div>
            <UserList users={users}>hallo</UserList>

            <a href={`/user/${userId}`}>
                {isToday
                    ? 'Today'
                    : 'Not Today'
                }
            </a>
            <a href={`/user/${userId}`}>
                {isToday && 'today'}
                {!isToday && 'not today'}
            </a>
            <div>
                <button type="button">
                    Button 1
                </button>

                <button type="button">
                    Button 2
                </button>
            </div>
        </div>


    );
};

export default App;
