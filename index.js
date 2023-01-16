const root = document.getElementById('root')

ReactDOM.render(<h1>Hello, root!</h1>, root)

// Try to write that 1-liner of React code again! This time,
// see if you can figure out how to render an <ul> with 2+ <li>s inside*/
ReactDOM.render(<ul>
    <li>Thing 1</li>
    <li>Thing 2</li>
    </ul>, root
    )


    function Navbar() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
    
    // 6
    // Challenge: Create your own custom React component!
    // Call it "MainContent", and have it return a simple
    // h1 element that says "I'm learning React!"

    // 自作
    // ReactDOM.render(
    //     <div>
    //     <h1>I'm learning React!</h1>
    //     <MainContent />
    //     </div>, root 
    // )

    // 👩‍🎓
    function MainContent() {
        return (
            <h1>I'm learning React!</h1>
        )
    }

    // Afterward, render it below the Navbar (which
    // you can do inside the ReactDOM.render call below)
    
    ReactDOM.render(
        <div>
            <Navbar />
            <MainContent />
            
        </div>,
        document.getElementById("root")
    )
    
 

    // 7

// const root = document.getElementById('root')

const h1 = document.createElement('h1')
h1.textContent = 'This is an imperative way to program'
// 🤬下忘れた
h1.className = 'header'
root.append(h1)




// 8 JSX

const element = <h1 className="header">This is JSX</h1>
console.log(element)
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */
ReactDOM.render(element, root)

const page = 
<div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
    
</div>

ReactDOM.render(page, root)

// CHALLENGE
const nav =
<div>
    <h1 className="header">website</h1>
    <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
</div>

ReactDOM.render(nav, root)

// 👩‍🎓
const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))