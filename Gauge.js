import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Gauge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gaugeContainer}>
          <View style={[styles.dial, styles.dial1]}>
            <View style={{ backgroundColor: 'rgba(255,255,255,0.5)', flex: 1 }} />
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }} />
          </View>
          <View style={[styles.dial, styles.dial2]} >
            <View style={{ backgroundColor: 'rgba(255,255,255,0.5)', flex: 1 }} />
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }} />
          </View>
          <View style={[styles.dial, styles.dial3]} >
            <View style={{ backgroundColor: 'rgba(255,255,255,0.5)', flex: 1 }} />
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }} />
          </View>
          <View style={[styles.dial, styles.dial4]} >
            <View style={{ backgroundColor: 'rgba(255,255,255,0.5)', flex: 1 }} />
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }} />
          </View>
        </View>

      </View>
    );
  }
}

function getAdjacent(radians, radius) {
  return Math.cos(radians) * radius;
}
function getOpposite(radians, radius) {
  return -1 * Math.sin(radians) * radius;
}
function toRadians(angle) {
  return angle * (Math.PI / 180);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  gaugeContainer: {
     width: 300,
     height: 300,
     margin: 30,
     borderWidth: 1
  },
  dial: {
    height: 10,
    width: '50%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row'
  },
  dial1: {
    transform: [
      { translateX: getAdjacent(toRadians(0), 75) + 75 },
      { translateY: getOpposite(toRadians(0), 75) },
      { rotateZ: '0deg' }
    ]
  },
  dial2: {
    transform: [
      { translateX: getAdjacent(toRadians(90), 75) + 75 },
      { translateY: getOpposite(toRadians(90), 75) },
      { translateY: 0 }, { rotateZ: '-90deg' }
    ]
  },
  dial3: {
    transform: [
      { translateX: getAdjacent(toRadians(45), 75) + 75 },
      { translateY: getOpposite(toRadians(45), 75) },
      { rotateZ: '-45deg' }]
  },
  dial4: {
    transform: [
      { translateX: getAdjacent(toRadians(-180), 75) + 75 },
      { translateY: getOpposite(toRadians(-180), 75) },
      { rotateZ: '-180deg' }
    ]
  }
});
