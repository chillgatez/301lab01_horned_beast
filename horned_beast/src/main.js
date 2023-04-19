import HornedBeast from "./hornedbeast";
// this component passes data through the hornedbeast component it should render an image with a title and description of each image
function Main() {
    return (
        <div>
            <HornedBeast title = "Catalope" description = "this here is a catalope" image = "https://i0.wp.com/moabsunnews.com/wp-content/uploads/2022/10/Cosmolope.png?fit=1200%2C880&ssl=1" />
            <HornedBeast title = "Jackalope" description = "this here is a jackalope" image = "https://cdna.artstation.com/p/assets/images/images/047/761/842/large/cowpigeon-jackalope-copy.jpg?1648393706" />
        </div>
    );
}

export default Main;