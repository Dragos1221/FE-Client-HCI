import { Container } from '@material-ui/core';
import * as React from 'react';
import Evaluare from '../component/Evaluare'

export interface CvPageProps {
    classes:any;
}
 
export interface CvPageState {
    varsta:any;
    gen:any;
    statutMarital:any;
    educatie:any;
    experientaDeMunca:any;
    imgSrc:any;
    nume:any;
}


 
class CvPage extends React.Component<CvPageProps, CvPageState> {
    constructor(props: CvPageProps)
    {
        super(props);
        this.state={
            nume:'Dragos',
            varsta: 23,
            imgSrc:'logo192.png',
            statutMarital:'casa',
            gen:'caine',
            educatie:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed massa auctor, feugiat magna et, aliquam quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris mattis sapien libero, id varius nisi facilisis eget. Praesent vitae porta ipsum. Suspendisse ante mi, sollicitudin vel pretium consequat, sollicitudin non enim. Praesent feugiat non magna sit amet pellentesque. Suspendisse placerat ipsum et augue aliquam commodo. Donec a lectus accumsan, hendrerit magna vel, facilisis ante. Mauris rutrum viverra augue, quis tempus mi viverra in. Donec feugiat, ipsum id iaculis fermentum, dui sapien egestas purus, et varius risus quam quis ipsum. Nullam auctor tellus eu quam pharetra, mollis eleifend odio gravidaNullam blandit tellus a lorem placerat luctus. Pellentesque quis laoreet sem. Curabitur ac massa sit amet magna laoreet tempor eget posuere libero. Donec congue imperdiet dui eu mattis. Integer et quam consequat velit maximus fermentum ut in felis. Fusce at diam vel quam consequat imperdiet nec maximus elit. Praesent dignissim magna lacinia neque gravida tempus. Aenean sagittis vel risus at tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nunc vel justo porta cursus. Nunc facilisis aliquam turpis, et interdum lectus viverra vel. Suspendisse potenti. Donec non euismod massa. Aenean urna urna, dapibus nec blandit quis, fermentum scelerisque nibh. Maecenas tellus quam, volutpat pulvinar placerat sit amet, bibendum vitae nunc. Curabitur sollicitudin, ligula et dapibus aliquet, tortor lectus condimentum nibh, id pharetra velit turpis nec lorem.',
            experientaDeMunca:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed massa auctor, feugiat magna et, aliquam quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris mattis sapien libero, id varius nisi facilisis eget. Praesent vitae porta ipsum. Suspendisse ante mi, sollicitudin vel pretium consequat, sollicitudin non enim. Praesent feugiat non magna sit amet pellentesque. Suspendisse placerat ipsum et augue aliquam commodo. Donec a lectus accumsan, hendrerit magna vel, facilisis ante. Mauris rutrum viverra augue, quis tempus mi viverra in. Donec feugiat, ipsum id iaculis fermentum, dui sapien egestas purus, et varius risus quam quis ipsum. Nullam auctor tellus eu quam pharetra, mollis eleifend odio gravidaNullam blandit tellus a lorem placerat luctus. Pellentesque quis laoreet sem. Curabitur ac massa sit amet magna laoreet tempor eget posuere libero. Donec congue imperdiet dui eu mattis. Integer et quam consequat velit maximus fermentum ut in felis. Fusce at diam vel quam consequat imperdiet nec maximus elit. Praesent dignissim magna lacinia neque gravida tempus. Aenean sagittis vel risus at tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nunc vel justo porta cursus. Nunc facilisis aliquam turpis, et interdum lectus viverra vel. Suspendisse potenti. Donec non euismod massa. Aenean urna urna, dapibus nec blandit quis, fermentum scelerisque nibh. Maecenas tellus quam, volutpat pulvinar placerat sit amet, bibendum vitae nunc. Curabitur sollicitudin, ligula et dapibus aliquet, tortor lectus condimentum nibh, id pharetra velit turpis nec lorem.',
        }
    }
    render() { 
        return (
            <Container >
                <Evaluare {...this.state}>

                </Evaluare>

       </Container>  );
    }
}
 
export default CvPage;