/*global describe, it, beforeEach*/
/*jshint -W079, expr:true */
import { expect } from 'chai';
import getters from '@/store/getters';

describe('Getters - GET_CENTER_POINT()', () => {
  describe('Given a valid initial state', () => {
    let state;

    beforeEach(() => {
      state = {
        defaultLocation: 'bothLongsPositive',
        locations: {
          bothLongsPositive: {
            lowerlong: 0,
            upperlong: 10,
            lowerlat: -10,
            upperlat: 10
          },
          bothLongsNegative: {
            lowerlong: -20,
            upperlong: -10,
            lowerlat: -10,
            upperlat: 10
          },
          westernLongPositive: {
            lowerlong: -10,
            upperlong: 10,
            lowerlat: -10,
            upperlat: 10
          },
          westernLongNegative: {
            lowerlong: 179,
            upperlong: -170,
            lowerlat: -10,
            upperlat: 10
          },
          centerAt180: {
            lowerlong: 170,
            upperlong: -170,
            lowerlat: -10,
            upperlat: 10
          }
        }
      };
    });

    describe('Given a state with no current location', () => {
      beforeEach(() => {
        state.currentLocation = undefined;
      });

      it('should return center for default location', () => {
        expect(getters.GET_CENTER_POINT(state)).to.eql([5, 0]);
      });
    });

    describe('Given a location with longitude bounds in the western hemisphere', () => {
      beforeEach(() => {
        state.currentLocation = 'bothLongsNegative';
      });

      it('should return center for current location', () => {
        expect(getters.GET_CENTER_POINT(state)).to.eql([-15, 0]);
      });
    });

    describe('Given a location with longitude bounds crossing the prime meridian', () => {
      beforeEach(() => {
        state.currentLocation = 'westernLongPositive';
      });

      it('should return center for current location', () => {
        expect(getters.GET_CENTER_POINT(state)).to.eql([0, 0]);
      });
    });

    describe('Given a location with longitude bounds crossing the 180th meridian', () => {
      beforeEach(() => {
        state.currentLocation = 'westernLongNegative';
      });

      it('should return center for current location', () => {
        expect(getters.GET_CENTER_POINT(state)).to.eql([-175.5, 0]);
      });
    });

    describe('Given a location with longitude center point right on the 180th meridian', () => {
      beforeEach(() => {
        state.currentLocation = 'centerAt180';
      });

      it('should return center for current location', () => {
        expect(getters.GET_CENTER_POINT(state)).to.eql([180, 0]);
      });
    });
  });
});
