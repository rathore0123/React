const root = document.querySelector("#root");
function CustomRender(reactElement, root){
    const elem = document.createElement(reactElement.type);
    for (const prop in reactElement.props){
        if(prop === "children"){
            continue
        }
        elem.setAttribute(prop, reactElement.props[prop]);
    }
    elem.innerHTML = reactElement.children;
    root.append(elem);
}
const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click Me to Visit Google"
};

CustomRender(reactElement, root);