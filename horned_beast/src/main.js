import HornedBeast from "./hornedbeast";
import Data from "./data.json"
// this component passes data through the hornedbeast component it should render an image with a title and description of each image
function Main() {
    return (
        <div>
            <HornedBeast title = {Data[0].title} description = {Data[0].decription} image = {Data[0].image} />
            <HornedBeast title = {Data[1].title} description = {Data[1].decription} image = {Data[1].image} />
            <HornedBeast title = {Data[2].title} description = {Data[2].decription} image = {Data[2].image} />
            <HornedBeast title = {Data[3].title} description = {Data[3].decription} image = {Data[3].image} />
            <HornedBeast title = {Data[4].title} description = {Data[4].decription} image = {Data[4].image} />
            <HornedBeast title = {Data[5].title} description = {Data[5].decription} image = {Data[5].image} />
            <HornedBeast title = {Data[6].title} description = {Data[6].decription} image = {Data[6].image} />
            <HornedBeast title = {Data[7].title} description = {Data[7].decription} image = {Data[7].image} />
            <HornedBeast title = {Data[8].title} description = {Data[8].decription} image = {Data[8].image} />
            <HornedBeast title = {Data[9].title} description = {Data[9].decription} image = {Data[9].image} />
            <HornedBeast title = {Data[10].title} description = {Data[10].decription} image = {Data[10].image} />
            <HornedBeast title = {Data[11].title} description = {Data[11].decription} image = {Data[11].image} />
            <HornedBeast title = {Data[12].title} description = {Data[12].decription} image = {Data[12].image} />
            <HornedBeast title = {Data[13].title} description = {Data[13].decription} image = {Data[13].image} />
            <HornedBeast title = {Data[14].title} description = {Data[14].decription} image = {Data[14].image} />
            <HornedBeast title = {Data[15].title} description = {Data[15].decription} image = {Data[15].image} />
            <HornedBeast title = {Data[16].title} description = {Data[16].decription} image = {Data[16].image} />
            <HornedBeast title = {Data[17].title} description = {Data[17].decription} image = {Data[17].image} />
            <HornedBeast title = {Data[18].title} description = {Data[18].decription} image = {Data[18].image} />
            <HornedBeast title = {Data[19].title} description = {Data[19].decription} image = {Data[19].image} />
        </div>
    );
}

export default Main;