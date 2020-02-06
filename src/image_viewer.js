import '../styles/image_viewer.scss';
import trees from '../assets/trees.jpg';
import umbrellaBIG from '../assets/umbrellaBIG.jpg';

export default () => {
    const treeImage = document.createElement('img');
    treeImage.src = trees;
    
    const umbrellaImage = document.createElement('img');
    umbrellaImage.src = umbrellaBIG;
    
    document.body.appendChild(treeImage);
    document.body.appendChild(umbrellaImage);
};