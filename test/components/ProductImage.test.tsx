import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';



describe('ProductImage', () => {
    
    test('should mostrar el componente correctamente con la imagen del product', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });
    
    test('should mostrar el componente correctamente sin imagen', () => {
        
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });
    
});
