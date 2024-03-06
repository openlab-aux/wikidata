// eslint-disable-next-line no-var
var TerminalMix8 = {};
// The SysEx message to send to the controller to force the midi controller
// to send the status of every item on the control surface.
var ControllerStatusSysex = [0xF0, 0x00, 0x20, 0x7F, 0x03, 0x01, 0xF7];

connections = []

var setHotcueColor = function (channel, outChannel, itemNumber, hotcueNumber){
    var hcColor = engine.getValue('[Channel' + channel + ']', 'hotcue_' + hotcueNumber + '_color');
    var nearestColor = colors.getValueForNearestColor(hcColor);
    midi.sendShortMsg(outChannel, itemNumber, nearestColor);
}

var clearHotcue = function(outChannel, itemNumber){
    midi.sendShortMsg(outChannel, itemNumber, 0x00);
}

var initHotcues = function(channel, outChannel) {

    // Creation or deletion
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_1_enabled', function (value, group, control) {
        if(value == 1)
            setHotcueColor(channel, outChannel, 0, 1);
        else
            clearHotcue(outChannel, 0)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_2_enabled', function (value, group, control) {
        if(value == 1)
            setHotcueColor(channel, outChannel, 1, 2);
        else
            clearHotcue(outChannel, 1)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_3_enabled', function (value, group, control) {
        if(value == 1)
            setHotcueColor(channel, outChannel, 2, 3);
        else
            clearHotcue(outChannel, 2)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_4_enabled', function (value, group, control) {
        if(value == 1)
            setHotcueColor(channel, outChannel, 3, 4);
        else
            clearHotcue(outChannel, 3)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_5_enabled', function (value, group, control) {
        if(value == 1)
            setHotcueColor(channel, outChannel, 4, 5);
        else
            clearHotcue(outChannel, 4)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_6_enabled', function (value, group, control) {
        if(value == 1)
            setHotcueColor(channel, outChannel, 5, 6);
        else
            clearHotcue(outChannel, 5)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_7_enabled', function (value, group, control) {
        if(value == 1)
            setHotcueColor(channel, outChannel, 6, 7);
        else
            clearHotcue(outChannel, 6)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_8_enabled', function (value, group, control) {
        if(value == 1)
            setHotcueColor(channel, outChannel, 7, 8);
        else
            clearHotcue(outChannel, 7)
    });
    // Color Update
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_1_color', function (value, group, control) {
        if(value != 1)
            if(engine.getValue('[Channel1]', 'hotcue_1_enabled'))
                setHotcueColor(channel, outChannel, 0, 1);
        else
            clearHotcue(outChannel, 0)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_2_color', function (value, group, control) {
        if(value != 1)
            if(engine.getValue('[Channel1]', 'hotcue_2_enabled'))
                setHotcueColor(channel, outChannel, 1, 2);
        else
            clearHotcue(outChannel, 1)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_3_color', function (value, group, control) {
        if(value != 1)
            if(engine.getValue('[Channel1]', 'hotcue_3_enabled'))
                setHotcueColor(channel, outChannel, 2, 3);
        else
            clearHotcue(outChannel, 2)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_4_color', function (value, group, control) {
        if(value != 1)
            if(engine.getValue('[Channel1]', 'hotcue_4_enabled'))
                setHotcueColor(channel, outChannel, 3, 4);
        else
            clearHotcue(outChannel, 3)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_5_color', function (value, group, control) {
        if(value != 1)
            if(engine.getValue('[Channel1]', 'hotcue_5_enabled'))
                setHotcueColor(channel, outChannel, 4, 5);
        else
            clearHotcue(outChannel, 5)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_6_color', function (value, group, control) {
        if(value != 1)
            if(engine.getValue('[Channel1]', 'hotcue_6_enabled'))
                setHotcueColor(channel, outChannel, 5, 6);
        else
            clearHotcue(outChannel, 6)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_7_color', function (value, group, control) {
        if(value != 1)
            if(engine.getValue('[Channel1]', 'hotcue_7_enabled'))
                setHotcueColor(channel, outChannel, 6, 7);
        else
            clearHotcue(outChannel, 7)
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'hotcue_8_color', function (value, group, control) {
        if(value != 1)
            if(engine.getValue('[Channel1]', 'hotcue_8_enabled'))
                setHotcueColor(channel, outChannel, 7, 8);
        else
            clearHotcue(outChannel, 8)
    });
}

var updateHotcueColors = function(channelNumber, channel){
    for(var i = 0; i < 8; i++){
        if(engine.getValue('[Channel'+ channelNumber + ']', 'hotcue_' + (i + 1) + '_enabled'))
            setHotcueColor(channelNumber, channel, i, i+1);
        else
            clearHotcue(channel, i + 1)
    }
}

var loadedTrack = function (channelNumber, delay, colors, channel){
    loadedConnection = engine.makeConnection('[Channel' + channelNumber + ']', 'track_loaded', function (value, group, control) {
         clearHotcues(channel);
         clearConnections();
         // First color
        // Hotcue
        engine.beginTimer(delay, function() {
            midi.sendShortMsg(channel, 0, colors[0]);
        }, true);
        // Loop
        engine.beginTimer(delay, function() {
            midi.sendShortMsg(channel, 0 + 8, colors[0]);
        }, true);
        // Sampler
        engine.beginTimer(delay, function() {
            midi.sendShortMsg(channel, 0 + 8 * 2, colors[0]);
        }, true);
        // Slice
        engine.beginTimer(delay, function() {
            midi.sendShortMsg(channel, 0 + 8 * 3, colors[0]);
        }, true);
        // Mode1
        engine.beginTimer(delay, function() {
            midi.sendShortMsg(channel, 0 + 8 * 4, colors[0]);
        }, true);
        // Mode2
        engine.beginTimer(delay, function() {
            midi.sendShortMsg(channel, 0 + 8 * 5, colors[0]);
        }, true);
        // Mode3
        engine.beginTimer(delay, function() {
            midi.sendShortMsg(channel, 0 + 8 * 6, colors[0]);
        }, true);
        // Mode4
        engine.beginTimer(delay, function() {
            midi.sendShortMsg(channel, 0 + 8 * 7, colors[0]);
        }, true);


        engine.beginTimer(delay * 2, function() {
            midi.sendShortMsg(channel, 1, colors[0]);
        }, true);
        // Loop
        engine.beginTimer(delay * 2, function() {
            midi.sendShortMsg(channel, 1 + 8, colors[0]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 2, function() {
            midi.sendShortMsg(channel, 1 + 8 * 2, colors[0]);
        }, true);
        // Slice
        engine.beginTimer(delay * 2, function() {
            midi.sendShortMsg(channel, 1 + 8 * 3, colors[0]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 2, function() {
            midi.sendShortMsg(channel, 1 + 8 * 4, colors[0]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 2, function() {
            midi.sendShortMsg(channel, 1 + 8 * 5, colors[0]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 2, function() {
            midi.sendShortMsg(channel, 1 + 8 * 6, colors[0]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 2, function() {
            midi.sendShortMsg(channel, 1 + 8 * 7, colors[0]);
        }, true);


        engine.beginTimer(delay * 3, function() {
            midi.sendShortMsg(channel, 2, colors[0]);
        }, true);
        // Loop
        engine.beginTimer(delay * 3, function() {
            midi.sendShortMsg(channel, 2 + 8, colors[0]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 3, function() {
            midi.sendShortMsg(channel, 2 + 8 * 2, colors[0]);
        }, true);
        // Slice
        engine.beginTimer(delay * 3, function() {
            midi.sendShortMsg(channel, 2 + 8 * 3, colors[0]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 3, function() {
            midi.sendShortMsg(channel, 2 + 8 * 4, colors[0]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 3, function() {
            midi.sendShortMsg(channel, 2 + 8 * 5, colors[0]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 3, function() {
            midi.sendShortMsg(channel, 2 + 8 * 6, colors[0]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 3, function() {
            midi.sendShortMsg(channel, 2 + 8 * 7, colors[0]);
        }, true);


        engine.beginTimer(delay * 4, function() {
            midi.sendShortMsg(channel, 3, colors[0]);
        }, true);
        // Loop
        engine.beginTimer(delay * 4, function() {
            midi.sendShortMsg(channel, 3 + 8, colors[0]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 4, function() {
            midi.sendShortMsg(channel, 3 + 8 * 2, colors[0]);
        }, true);
        // Slice
        engine.beginTimer(delay * 4, function() {
            midi.sendShortMsg(channel, 3 + 8 * 3, colors[0]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 4, function() {
            midi.sendShortMsg(channel, 3 + 8 * 4, colors[0]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 4, function() {
            midi.sendShortMsg(channel, 3 + 8 * 5, colors[0]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 4, function() {
            midi.sendShortMsg(channel, 3 + 8 * 6, colors[0]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 4, function() {
            midi.sendShortMsg(channel, 3 + 8 * 7, colors[0]);
        }, true);


        engine.beginTimer(delay * 5, function() {
            midi.sendShortMsg(channel, 4, colors[0]);
        }, true);
        // Loop
        engine.beginTimer(delay * 5, function() {
            midi.sendShortMsg(channel, 4 + 8, colors[0]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 5, function() {
            midi.sendShortMsg(channel, 4 + 8 * 2, colors[0]);
        }, true);
        // Slice
        engine.beginTimer(delay * 5, function() {
            midi.sendShortMsg(channel, 4 + 8 * 3, colors[0]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 5, function() {
            midi.sendShortMsg(channel, 4 + 8 * 4, colors[0]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 5, function() {
            midi.sendShortMsg(channel, 4 + 8 * 5, colors[0]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 5, function() {
            midi.sendShortMsg(channel, 4 + 8 * 6, colors[0]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 5, function() {
            midi.sendShortMsg(channel, 4 + 8 * 7, colors[0]);
        }, true);


        engine.beginTimer(delay * 6, function() {
            midi.sendShortMsg(channel, 5, colors[0]);
        }, true);
        // Loop
        engine.beginTimer(delay * 6, function() {
            midi.sendShortMsg(channel, 5 + 8, colors[0]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 6, function() {
            midi.sendShortMsg(channel, 5 + 8 * 2, colors[0]);
        }, true);
        // Slice
        engine.beginTimer(delay * 6, function() {
            midi.sendShortMsg(channel, 5 + 8 * 3, colors[0]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 6, function() {
            midi.sendShortMsg(channel, 5 + 8 * 4, colors[0]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 6, function() {
            midi.sendShortMsg(channel, 5 + 8 * 5, colors[0]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 6, function() {
            midi.sendShortMsg(channel, 5 + 8 * 6, colors[0]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 6, function() {
            midi.sendShortMsg(channel, 5 + 8 * 7, colors[0]);
        }, true);


        engine.beginTimer(delay * 7, function() {
            midi.sendShortMsg(channel, 6, colors[0]);
        }, true);
        // Loop
        engine.beginTimer(delay * 7, function() {
            midi.sendShortMsg(channel, 6 + 8, colors[0]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 7, function() {
            midi.sendShortMsg(channel, 6 + 8 * 2, colors[0]);
        }, true);
        // Slice
        engine.beginTimer(delay * 7, function() {
            midi.sendShortMsg(channel, 6 + 8 * 3, colors[0]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 7, function() {
            midi.sendShortMsg(channel, 6 + 8 * 4, colors[0]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 7, function() {
            midi.sendShortMsg(channel, 6 + 8 * 5, colors[0]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 7, function() {
            midi.sendShortMsg(channel, 6 + 8 * 6, colors[0]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 7, function() {
            midi.sendShortMsg(channel, 6 + 8 * 7, colors[0]);
        }, true);


        engine.beginTimer(delay * 8, function() {
            midi.sendShortMsg(channel, 7, colors[0]);
        }, true);
        // Loop
        engine.beginTimer(delay * 8, function() {
            midi.sendShortMsg(channel, 7 + 8, colors[0]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 8, function() {
            midi.sendShortMsg(channel, 7 + 8 * 2, colors[0]);
        }, true);
        // Slice
        engine.beginTimer(delay * 8, function() {
            midi.sendShortMsg(channel, 7 + 8 * 3, colors[0]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 8, function() {
            midi.sendShortMsg(channel, 7 + 8 * 4, colors[0]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 8, function() {
            midi.sendShortMsg(channel, 7 + 8 * 5, colors[0]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 8, function() {
            midi.sendShortMsg(channel, 7 + 8 * 6, colors[0]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 8, function() {
            midi.sendShortMsg(channel, 7 + 8 * 7, colors[0]);
        }, true);





        // Second color
        // Hotcue
        engine.beginTimer(delay * 9, function() {
            midi.sendShortMsg(channel, 0, colors[1]);
        }, true);
        // Loop
        engine.beginTimer(delay * 9, function() {
            midi.sendShortMsg(channel, 0 + 8, colors[1]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 9, function() {
            midi.sendShortMsg(channel, 0 + 8 * 2, colors[1]);
        }, true);
        // Slice
        engine.beginTimer(delay * 9, function() {
            midi.sendShortMsg(channel, 0 + 8 * 3, colors[1]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 9, function() {
            midi.sendShortMsg(channel, 0 + 8 * 4, colors[1]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 9, function() {
            midi.sendShortMsg(channel, 0 + 8 * 5, colors[1]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 9, function() {
            midi.sendShortMsg(channel, 0 + 8 * 6, colors[1]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 9, function() {
            midi.sendShortMsg(channel, 0 + 8 * 7, colors[1]);
        }, true);


        engine.beginTimer(delay * 10, function() {
            midi.sendShortMsg(channel, 1, colors[1]);
        }, true);
        // Loop
        engine.beginTimer(delay * 10, function() {
            midi.sendShortMsg(channel, 1 + 8, colors[1]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 10, function() {
            midi.sendShortMsg(channel, 1 + 8 * 2, colors[1]);
        }, true);
        // Slice
        engine.beginTimer(delay * 10, function() {
            midi.sendShortMsg(channel, 1 + 8 * 3, colors[1]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 10, function() {
            midi.sendShortMsg(channel, 1 + 8 * 4, colors[1]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 10, function() {
            midi.sendShortMsg(channel, 1 + 8 * 5, colors[1]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 10, function() {
            midi.sendShortMsg(channel, 1 + 8 * 6, colors[1]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 10, function() {
            midi.sendShortMsg(channel, 1 + 8 * 7, colors[1]);
        }, true);


        engine.beginTimer(delay * 11, function() {
            midi.sendShortMsg(channel, 2, colors[1]);
        }, true);
        // Loop
        engine.beginTimer(delay * 11, function() {
            midi.sendShortMsg(channel, 2 + 8, colors[1]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 11, function() {
            midi.sendShortMsg(channel, 2 + 8 * 2, colors[1]);
        }, true);
        // Slice
        engine.beginTimer(delay * 11, function() {
            midi.sendShortMsg(channel, 2 + 8 * 3, colors[1]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 11, function() {
            midi.sendShortMsg(channel, 2 + 8 * 4, colors[1]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 11, function() {
            midi.sendShortMsg(channel, 2 + 8 * 5, colors[1]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 11, function() {
            midi.sendShortMsg(channel, 2 + 8 * 6, colors[1]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 11, function() {
            midi.sendShortMsg(channel, 2 + 8 * 7, colors[1]);
        }, true);


        engine.beginTimer(delay * 12, function() {
            midi.sendShortMsg(channel, 3, colors[1]);
        }, true);
        // Loop
        engine.beginTimer(delay * 12, function() {
            midi.sendShortMsg(channel, 3 + 8, colors[1]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 12, function() {
            midi.sendShortMsg(channel, 3 + 8 * 2, colors[1]);
        }, true);
        // Slice
        engine.beginTimer(delay * 12, function() {
            midi.sendShortMsg(channel, 3 + 8 * 3, colors[1]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 12, function() {
            midi.sendShortMsg(channel, 3 + 8 * 4, colors[1]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 12, function() {
            midi.sendShortMsg(channel, 3 + 8 * 5, colors[1]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 12, function() {
            midi.sendShortMsg(channel, 3 + 8 * 6, colors[1]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 12, function() {
            midi.sendShortMsg(channel, 3 + 8 * 7, colors[1]);
        }, true);


        engine.beginTimer(delay * 13, function() {
            midi.sendShortMsg(channel, 4, colors[1]);
        }, true);
        // Loop
        engine.beginTimer(delay * 13, function() {
            midi.sendShortMsg(channel, 4 + 8, colors[1]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 13, function() {
            midi.sendShortMsg(channel, 4 + 8 * 2, colors[1]);
        }, true);
        // Slice
        engine.beginTimer(delay * 13, function() {
            midi.sendShortMsg(channel, 4 + 8 * 3, colors[1]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 13, function() {
            midi.sendShortMsg(channel, 4 + 8 * 4, colors[1]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 13, function() {
            midi.sendShortMsg(channel, 4 + 8 * 5, colors[1]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 13, function() {
            midi.sendShortMsg(channel, 4 + 8 * 6, colors[1]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 13, function() {
            midi.sendShortMsg(channel, 4 + 8 * 7, colors[1]);
        }, true);

         engine.beginTimer(delay * 14, function() {
            midi.sendShortMsg(channel, 5, colors[1]);
        }, true);
        // Loop
        engine.beginTimer(delay * 14, function() {
            midi.sendShortMsg(channel, 5 + 8, colors[1]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 14, function() {
            midi.sendShortMsg(channel, 5 + 8 * 2, colors[1]);
        }, true);
        // Slice
        engine.beginTimer(delay * 14, function() {
            midi.sendShortMsg(channel, 5 + 8 * 3, colors[1]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 14, function() {
            midi.sendShortMsg(channel, 5 + 8 * 4, colors[1]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 14, function() {
            midi.sendShortMsg(channel, 5 + 8 * 5, colors[1]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 14, function() {
            midi.sendShortMsg(channel, 5 + 8 * 6, colors[1]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 14, function() {
            midi.sendShortMsg(channel, 5 + 8 * 7, colors[1]);
        }, true);

        engine.beginTimer(delay * 15, function() {
            midi.sendShortMsg(channel, 6, colors[1]);
        }, true);
        // Loop
        engine.beginTimer(delay * 15, function() {
            midi.sendShortMsg(channel, 6 + 8, colors[1]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 15, function() {
            midi.sendShortMsg(channel, 6 + 8 * 2, colors[1]);
        }, true);
        // Slice
        engine.beginTimer(delay * 15, function() {
            midi.sendShortMsg(channel, 6 + 8 * 3, colors[1]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 15, function() {
            midi.sendShortMsg(channel, 6 + 8 * 4, colors[1]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 15, function() {
            midi.sendShortMsg(channel, 6 + 8 * 5, colors[1]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 15, function() {
            midi.sendShortMsg(channel, 6 + 8 * 6, colors[1]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 15, function() {
            midi.sendShortMsg(channel, 6 + 8 * 7, colors[1]);
        }, true);


        engine.beginTimer(delay * 16, function() {
            midi.sendShortMsg(channel, 7, colors[1]);
        }, true);
        // Loop
        engine.beginTimer(delay * 16, function() {
            midi.sendShortMsg(channel, 7 + 8, colors[1]);
        }, true);
        // Sampler
        engine.beginTimer(delay * 16, function() {
            midi.sendShortMsg(channel, 7 + 8 * 2, colors[1]);
        }, true);
        // Slice
        engine.beginTimer(delay * 16, function() {
            midi.sendShortMsg(channel, 7 + 8 * 3, colors[1]);
        }, true);
        // Mode1
        engine.beginTimer(delay * 16, function() {
            midi.sendShortMsg(channel, 7 + 8 * 4, colors[1]);
        }, true);
        // Mode2
        engine.beginTimer(delay * 16, function() {
            midi.sendShortMsg(channel, 7 + 8 * 5, colors[1]);
        }, true);
        // Mode3
        engine.beginTimer(delay * 16, function() {
            midi.sendShortMsg(channel, 7 + 8 * 6, colors[1]);
        }, true);
        // Mode4
        engine.beginTimer(delay * 16, function() {
            midi.sendShortMsg(channel, 7 + 8 * 7, colors[1]);
            clearHotcues(channel);
            initMethods();
            updateHotcueColors(channelNumber, channel);
        }, true);
    });
}

var beatloopListen = function(channel, outChannel){
    var enabledColor = 0x07
    var disabledColor = 0x00
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_0.5_enabled', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 8, enabledColor);
        else
            midi.sendShortMsg(outChannel, 8, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_1_enabled', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 9, enabledColor);
        else
            midi.sendShortMsg(outChannel, 9, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_2_enabled', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 10, enabledColor);
        else
            midi.sendShortMsg(outChannel, 10, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_4_enabled', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 11, enabledColor);
        else
            midi.sendShortMsg(outChannel, 11, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_8_enabled', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 12, enabledColor);
        else
            midi.sendShortMsg(outChannel, 12, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_16_enabled', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 13, enabledColor);
        else
            midi.sendShortMsg(outChannel, 13, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_32_enabled', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 14, enabledColor);
        else
            midi.sendShortMsg(outChannel, 14, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_64_enabled', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 15, enabledColor);
        else
            midi.sendShortMsg(outChannel, 15, disabledColor);
    });
}

var beatloopSizeListen = function(channel, outChannel){
    enabledColor = 0x03;
    disabledColor = 0x00;
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'beatloop_size', function (value, group, control) {
        if(value == 0.5){
                for(var i = 0; i < 8; i++){
                    if(i == 0)
                        midi.sendShortMsg(outChannel, 8 + i, enabledColor);
                    else
                        midi.sendShortMsg(outChannel, 8 + i, disabledColor);
                }
        }
        if(value == 1){
                for(var i = 0; i < 8; i++){
                    if(i == 1)
                        midi.sendShortMsg(outChannel, 8 + i, enabledColor);
                    else
                        midi.sendShortMsg(outChannel, 8 + i, disabledColor);
                }
        }
        if(value == 2){
                for(var i = 0; i < 8; i++){
                    if(i == 2)
                        midi.sendShortMsg(outChannel, 8 + i, enabledColor);
                    else
                        midi.sendShortMsg(outChannel, 8 + i, disabledColor);
                }
        }
        if(value == 4){
                for(var i = 0; i < 8; i++){
                    if(i == 3)
                        midi.sendShortMsg(outChannel, 8 + i, enabledColor);
                    else
                        midi.sendShortMsg(outChannel, 8 + i, disabledColor);
                }
        }
        if(value == 8){
                for(var i = 0; i < 8; i++){
                    if(i == 4)
                        midi.sendShortMsg(outChannel, 8 + i, enabledColor);
                    else
                        midi.sendShortMsg(outChannel, 8 + i, disabledColor);
                }
        }
        if(value == 16){
                for(var i = 0; i < 8; i++){
                    if(i == 5)
                        midi.sendShortMsg(outChannel, 8 + i, enabledColor);
                    else
                        midi.sendShortMsg(outChannel, 8 + i, disabledColor);
                }
        }
        if(value == 32){
                for(var i = 0; i < 8; i++){
                    if(i == 6)
                        midi.sendShortMsg(outChannel, 8 + i, enabledColor);
                    else
                        midi.sendShortMsg(outChannel, 8 + i, disabledColor);
                }
        }
        if(value == 64){
                for(var i = 0; i < 8; i++){
                    if(i == 7)
                        midi.sendShortMsg(outChannel, 8 + i, enabledColor);
                    else
                        midi.sendShortMsg(outChannel, 8 + i, disabledColor);
                }
        }
    });
}

var samplerListen = function(outChannel, samplerOffset){
    var enabledColor = 0x34
    var disabledColor = 0x00
    connections[connections.length] = engine.makeConnection('[Sampler' + (samplerOffset + 1) + ']', 'play', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 16, enabledColor);
        else
            midi.sendShortMsg(outChannel, 16, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Sampler' + (samplerOffset + 2) + ']', 'play', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 17, enabledColor);
        else
            midi.sendShortMsg(outChannel, 17, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Sampler' + (samplerOffset + 3) + ']', 'play', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 18, enabledColor);
        else
            midi.sendShortMsg(outChannel, 18, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Sampler' + (samplerOffset + 4) + ']', 'play', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 19, enabledColor);
        else
            midi.sendShortMsg(outChannel, 19, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Sampler' + (samplerOffset + 4 + 5) + ']', 'play', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 20, enabledColor);
        else
            midi.sendShortMsg(outChannel, 20, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Sampler' + (samplerOffset + 4 + 6) + ']', 'play', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 21, enabledColor);
        else
            midi.sendShortMsg(outChannel, 21, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Sampler' + (samplerOffset + 4 + 7) + ']', 'play', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 22, enabledColor);
        else
            midi.sendShortMsg(outChannel, 22, disabledColor);
    });
    connections[connections.length] = engine.makeConnection('[Sampler' + (samplerOffset + 4 + 8) + ']', 'play', function (value, group, control) {
        if(value == 1)
            midi.sendShortMsg(outChannel, 23, enabledColor);
        else
            midi.sendShortMsg(outChannel, 23, disabledColor);
    });
}


var vuMeterListener = function(outChannel){
    connections[connections.length] = engine.makeConnection('[Channel' + 1 + ']', 'VuMeter', function (value, group, control) {
        midi.sendShortMsg(0xB0, 1, value * 10);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + 2 + ']', 'VuMeter', function (value, group, control) {
        midi.sendShortMsg(0xB1, 1, value * 10);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + 3 + ']', 'VuMeter', function (value, group, control) {
        midi.sendShortMsg(0xB2, 1, value * 10);
    });
    connections[connections.length] = engine.makeConnection('[Channel' + 4 + ']', 'VuMeter', function (value, group, control) {
        midi.sendShortMsg(0xB3, 1, value * 10);
    });
}

var headphonesListener = function(channel, outChannel){
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'pfl', function (value, group, control) {
        if(value == 1){
            midi.sendShortMsg(outChannel, 0x0E, 0x7F);
        }else{
            midi.sendShortMsg(outChannel, 0x0E, 0x00);
        }
    });
}

var deckTrackLoadedListener = function(channel, outChannel){
    connections[connections.length] = engine.makeConnection('[Channel' + channel + ']', 'track_loaded', function (value, group, control) {
        if(value == 1){
            midi.sendShortMsg(outChannel, 0x10, 0x7F);
        }else{
            midi.sendShortMsg(outChannel, 0x10, 0x00);
        }
    });
}

var fxEnabledListener = function(channel, outChannel){

    connections[connections.length] = engine.makeConnection('[EffectRack1_EffectUnit' + channel + '_Effect1]', 'enabled', function (value, group, control) {
        if(value == 1){
            midi.sendShortMsg(outChannel, 0x1A, 0x7F);
        }else{
            midi.sendShortMsg(outChannel, 0x1A, 0x00);
        }
    });
    connections[connections.length] = engine.makeConnection('[EffectRack1_EffectUnit1_Effect2]', 'enabled', function (value, group, control) {
        if(value == 1){
            midi.sendShortMsg(outChannel, 0x1B, 0x7F);
        }else{
            midi.sendShortMsg(outChannel, 0x1B, 0x00);
        }
    });
    connections[connections.length] = engine.makeConnection('[EffectRack1_EffectUnit1_Effect3]', 'enabled', function (value, group, control) {
        if(value == 1){
            midi.sendShortMsg(outChannel, 0x1C, 0x7F);
        }else{
            midi.sendShortMsg(outChannel, 0x1C, 0x00);
        }
    });
}

var playingListener = function(channel, outChannel){
    connections[connections.length] = engine.makeConnection('[Channel'+ channel + ']', 'play', function (value, group, control) {
        if(value == 1){
            midi.sendShortMsg(outChannel, 0x05, 0x7F);
        }else{
            midi.sendShortMsg(outChannel, 0x05, 0x00);
        }
    });
}


TerminalMix8.init = function () {

    // After midi controller receive this Outbound Message request SysEx Message,
    // midi controller will send the status of every item on the
    // control surface. (Mixxx will be initialized with current values)
    midi.sendSysexMsg(ControllerStatusSysex, ControllerStatusSysex.length);
    // midi.sendShortMsg(0x94, 00, 0x30);
    loadedTrack(1, 75, [0x30, 0x4C], 0x94);
    loadedTrack(2, 75, [0x30, 0x4C], 0x95);
    loadedTrack(3, 75, [0x30, 0x4C], 0x96);
    loadedTrack(4, 75, [0x30, 0x4C], 0x97);
    initMethods();
}


var initMethods = function(){
    initHotcues(1, 0x90);
    initHotcues(2, 0x91);
    initHotcues(3, 0x92);
    initHotcues(4, 0x93);
    beatloopListen(1, 0x94);
    beatloopListen(2, 0x95);
    beatloopListen(3, 0x96);
    beatloopListen(4, 0x97);
    beatloopSizeListen(1, 0x94);
    beatloopSizeListen(2, 0x95);
    samplerListen(0x94, 0);
    samplerListen(0x95, 4);
    vuMeterListener(0x90);
    headphonesListener(1, 0x90);
    headphonesListener(2, 0x91);
    headphonesListener(3, 0x92);
    headphonesListener(4, 0x93);
    deckTrackLoadedListener(1,0x90);
    deckTrackLoadedListener(2,0x91);
    deckTrackLoadedListener(3,0x92);
    deckTrackLoadedListener(4,0x93);
    fxEnabledListener(1, 0x90);
    playingListener(1, 0x90);
    playingListener(2, 0x91);
    playingListener(3, 0x92);
    playingListener(4, 0x93);
}

// ColorMapper for Terminal Mix Colors
var colors = new ColorMapper({
        0x000000: 0x00,  // Black
        0xCC0000: 0x30,  // Red
        0xCC4400: 0x34,  // Orange
        0xCCCC00: 0x3C,  // yellow
        0x44CC00: 0x4C,  // lime
        0x00CCCC: 0x07,  // light blue (0x0A)
        0x0088CC: 0x03,  // blue (0x0B)
        0xCC00CC: 0x13,  // purple
        0xFFFFFF: 0x2B,  // white
        0xFFBCFF: 0x2A,  // dark white
    });

TerminalMix8.shutdown = function() {
    clearConnections();
    clearHotcues(0x94);
    clearHotcues(0x95);
    clearHotcues(0x96);
    clearHotcues(0x97);
}

var clearConnections = function(){
    for (var i = 0; i < connections.length; i++) {
        connections[i].disconnect();
    }
}

var clearHotcues = function (channel){
    for (var i = 0; i <= 8 * 5; i++) {
        midi.sendShortMsg(channel, i, 0x00);
    }
}

// The button that enables/disables scratching
TerminalMix8.wheelTouch = function (channel, control, value, status, group) {
    var deckNumber = script.deckFromGroup(group);
    //if ((status & 0xF0) === 0x90) {    // If button down
    if (value === 0x7F) {  // Some wheels send 0x90 on press and release, so you need to check the value
        var alpha = 1.0/8;
        var beta = alpha/32;
        engine.scratchEnable(deckNumber, 128, 33+1/3, alpha, beta);
    } else {    // If button up
        engine.scratchDisable(deckNumber);
    }
}

// The wheel that actually controls the scratching
TerminalMix8.wheelTurn = function (channel, control, value, status, group) {
    // --- Choose only one of the following!
    // A: For a control that centers on 0:
    //var newValue;
    //if (value < 64) {
    //    newValue = value;
    //} else {
    //    newValue = value - 128;
    //}

    // B: For a control that centers on 0x40 (64):
    var newValue = value - 64;

    // --- End choice

    // In either case, register the movement
    var deckNumber = script.deckFromGroup(group);
    if (engine.isScratching(deckNumber)) {
        engine.scratchTick(deckNumber, newValue); // Scratch!
    } else {
        engine.setValue(group, 'jog', newValue); // Pitch bend
    }
}

TerminalMix8.allSamplerGain = function (channel, control, value, status, group){
    for(var i = 0; i < 16; i++){
        // TODO: Check what curve the Sampler Volume is using. Maybe logarithmic?
        engine.setValue("[Sampler" + i + "]", 'pregain', value/35);
    }
}

TerminalMix8.navigateLibrary = function (channel, control, value, status, group){
    if(value == 0x3F)
        engine.setValue("[Library]", "MoveUp", true)
    else
        engine.setValue("[Library]", "MoveDown", true)
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

TerminalMix8.preview = function (channel, control, value, status, group){
    if(value != 0){
        if(engine.getValue("[PreviewDeck1]", "play") != 1 ){
            engine.setValue("[PreviewDeck1]", "LoadSelectedTrackAndPlay", 1);
        }else{
            engine.setValue("[PreviewDeck1]", "play", 0);
        }
    }
}

// The button that enables/disables scratching
TerminalMix8.loopSize = function (channel, control, value, status, group) {
    var deckNumber = script.deckFromGroup(group);
    if (value == 0x3F) {
        engine.setValue("[Channel"+ deckNumber + "]", "loop_halve", true);
    }else if(value == 0x41) {
        engine.setValue("[Channel" + deckNumber + "]", "loop_double", true);
    }
}

