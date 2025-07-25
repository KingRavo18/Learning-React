import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import Footer from './Footer.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ButtonClick from './ButtonClick.jsx'
import ProfilePicture from './ProfiilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

function App() {

  const fruits = [{id:1, name:"apple", calories:95}, 
                  {id:2, name:"orange", calories:45}, 
                  {id:3, name:"banana", calories:105}, 
                  {id:4, name:"pinapple", calories:37}, 
                  {id:5, name:"lemon", calories:12}];

  const vegetables = [{id:6, name:"potato", calories:95}, 
                      {id:7, name:"cabagge", calories:45}, 
                      {id:8, name:"tomato", calories:105}, 
                      {id:9, name:"cucumber", calories:37}, 
                      {id:10, name:"kerits", calories:12}];
  
  return(
    <>
      <Header/>
      <Card/>
      <Card/>
      <Button/>
      <Food/>
      <Student name="Bob" age="34" isStudent={true}/>
      <Student name="Patrick" age={43} isStudent={false}/>
      <Student name="Squidward" age={52} isStudent={false}/>
      <UserGreeting isLoggedIn={false} username="James Bon"/>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
      <ButtonClick/>
      <ProfilePicture/>
      <MyComponent/>
      <Counter/>
      <Footer/>
    </>
  );
}

export default App
