import { Image, StyleSheet, Platform, View } from 'react-native';
import Svg, { Circle, Text, TextPath } from 'react-native-svg';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Svg width={200} height={200} viewBox='0 0 200 200'>
        <Circle
          id="textAlignmentHelper"
          cx={100}
          cy={100}
          r={80}
          fill="#ff0000a0"
        />

        <Text textAnchor="start" fill="#FFF">
            <TextPath href="#textAlignmentHelper">
                Start example text
            </TextPath>
        </Text>
      </Svg>

      <Svg width={200} height={200} viewBox='0 0 200 200'>
        <Circle
          id="textAlignmentHelper"
          cx={100}
          cy={100}
          r={80}
          fill="#ff0000a0"
        />

        {/* This text is not curved along the circle correctly on Android */}
        <Text textAnchor="middle" fill="#FFF">
            <TextPath href="#textAlignmentHelper">
                Middle example text
            </TextPath>
        </Text>
      </Svg>

      <Svg width={200} height={200} viewBox='0 0 200 200'>
        <Circle
          id="textAlignmentHelper"
          cx={100}
          cy={100}
          r={80}
          fill="#ff0000a0"
        />

        {/* This text is not shown at all on Android */}
        <Text textAnchor="end" fill="#FFF">
            <TextPath href="#textAlignmentHelper">
                End example text
            </TextPath>
        </Text>
      </Svg>
    </View>
  );
}
