/**
 * Created by Fary Hurtado on 19/05/2017.
 */

import * as ZenActions from '../ZenActions';
import reducer from  '../ZenState';


describe('ZenState', () => {

    describe('Mejor caso', () => {

        it('Debe devolver el estado inicial', () => {
            expect(
                reducer(undefined, {})
            ).toEqual({
                zen: null,
                fetching: false,
                error: null
            });
        });

        test('Debe indicar que se está haciendo la petición', () => {
            expect(
                reducer(undefined, ZenActions.requestZenAction())
            ).toEqual({
                zen: null,
                fetching: true,
                error: null
            });
        });

        test('Debe indicar que la petición fue recibida con valores nulos', () => {
            expect(
                reducer(undefined, ZenActions.receiveZenAction(null))
            ).toEqual({
                zen: null,
                fetching: false,
                error: null
            });
        });

        test('Debe indicar que la petición fue recibida con valores no nulos', () => {
            expect(
                reducer(undefined, ZenActions.receiveZenAction("Speak like a human."))
            ).toEqual({
                zen: "Speak like a human.",
                fetching: false,
                error: null
            });
        });

        it('Debe indicar que ocurrió que se obtuvo un error como respuesta', () => {
            expect(
                reducer(undefined, ZenActions.receiveZenErrorAction("Error en el servidor"))
            ).toEqual({
                error: "Error en el servidor",
                zen: null,
                fetching: false
            });
        });
    });

});