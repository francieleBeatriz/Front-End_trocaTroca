
import { StyledImagemAvatar, StyledDivImagemAvatar, StyledImagemEscolhida } from '../../assets/styles/StyledComponents';
import React, { useContext, useState } from 'react';

import image1 from '../../assets/images/images-avatar/image1.png';
import image2 from '../../assets/images/images-avatar/image2.png';
import image3 from '../../assets/images/images-avatar/image3.png';
import image4 from '../../assets/images/images-avatar/image4.png';
import image5 from '../../assets/images/images-avatar/image5.png';
import image6 from '../../assets/images/images-avatar/image6.png';
import image7 from '../../assets/images/images-avatar/image7.png';
import image8 from '../../assets/images/images-avatar/image8.png';
import image9 from '../../assets/images/images-avatar/image9.png';
import image10 from '../../assets/images/images-avatar/image10.png';
import { TelaCadastroContext } from '../templates/TelaCadastro';

interface ImagemAvatarProps {
    image: string; 
}
const imagePaths: string[] = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const ImagemAvatar: React.FC<ImagemAvatarProps> = ({image}) => {
    // Estado para armazenar a imagem escolhida
    const [selectedImage, setSelectedImage] = useState<string>(imagePaths[0]); // inicializado com a primeira imagem
    const { setCaminhoFoto } = useContext(TelaCadastroContext);

    return (
        <div>
            <StyledImagemEscolhida image={selectedImage}/>
            <StyledDivImagemAvatar>
                {imagePaths.map((image, index) => (
                    <StyledImagemAvatar 
                        key={index} 
                        image={image} 
                        onClick={() => {setSelectedImage(image); setCaminhoFoto(image)}} // atualiza a imagem escolhida quando clicado
                    />
                ))}
            </StyledDivImagemAvatar>
        </div>         
    );
}

export default ImagemAvatar;
