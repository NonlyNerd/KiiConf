/*
 KII Keyboard Editor
 Copyright (C) 2016 Jeremy Bondeson

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var SETTINGS = (function(settings) {
    'use strict';

    settings.URI = ''; // If not empty end in '/'
    settings.VERSION = '0.4.0';
    settings.GENERATOR = 'KIICONF';

    settings.GRID_SIZE = 13;

    // Make this a property so the key size is correct even when
    //  the grid size has been updated.
    Object.defineProperty(settings, 'KEY_SIZE', {
        get: function () { return settings.GRID_SIZE * 4; }
    });

    settings.STAGE_WIDTH = 0;   // they will be populated later
    settings.STAGE_HEIGHT = 0;
    
    return settings;
})(SETTINGS || {});
