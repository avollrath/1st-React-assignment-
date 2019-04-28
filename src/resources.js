const rootElement = document.getElementById('root');



const Header = ({firstName, lastName, title, year}) => {
return (
<header>
    <h1>{title}</h1>
    <h4>Student: {firstName} {lastName}</h4>
    <p>Year: {year}</p>
</header>)
}



const Main = ({animals}) => {
const renderList = animals.map((animal, i) => <li key = {'animal' +i}>{animal}</li>);
return (
<main>
    <p>You should have these animals to get started with React:</p>
    <ul>
        {renderList}
    </ul>
</main>)
}


const Footer = ({year}) =>{
return (
<footer>
    <p>Copyright &copy; {year}</p>
</footer>)
}


const App = () => {
return <div>
<Header title= 'Lets get started with React'
        firstName = 'Andre'
        lastName = 'Vollrath'
        year = {new Date().getFullYear()} />
<Main animals = {['Dog', 'Cat','Squirrel']}/>
<Footer year = {new Date().getFullYear()}/>
</div>
}




ReactDOM.render (<App />, rootElement);