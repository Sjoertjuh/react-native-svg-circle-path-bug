import { View } from 'react-native';
import Svg, { Circle, Path, Text, TextPath } from 'react-native-svg';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333'}}>
      <Svg width={200} height={200} viewBox='0 0 200 200'>
        <Circle
          id="textAlignmentHelper"
          cx={100}
          cy={100}
          r={80}
          fill="#ff000050"
        />

        <Text textAnchor="start" fill="#FFF">
            <TextPath href="#textAlignmentHelper">
                Start start text
            </TextPath>
        </Text>

        <Text textAnchor="start" fill="#FFF">
            <TextPath href="#textAlignmentHelper" startOffset="50%">
                Start halfway text
            </TextPath>
        </Text>

        {/* This text bunches up in the end on Android, but is hidden as expected on ios */}
        <Text textAnchor="start" fill="#FFF">
            <TextPath href="#textAlignmentHelper" startOffset="100%">
                Start end text
            </TextPath>
        </Text>
      </Svg>

      <Svg width={200} height={200} viewBox='0 0 200 200'>
        <Circle
          id="textAlignmentHelper"
          cx={100}
          cy={100}
          r={80}
          fill="#00ff0050"
        />

        {/* This text bunches up in the start on Android, and is cut off as expected on ios */}
        <Text textAnchor="middle" fill="#FFF">
            <TextPath href="#textAlignmentHelper">
                Middle start text
            </TextPath>
        </Text>

        <Text textAnchor="middle" fill="#FFF">
            <TextPath href="#textAlignmentHelper" startOffset="50%">
                Middle halfway text
            </TextPath>
        </Text>

        {/* This text bunches up in the end on Android, and is cut off as expected on ios */}
        <Text textAnchor="middle" fill="#FFF">
            <TextPath href="#textAlignmentHelper" startOffset="100%">
                Middle end text
            </TextPath>
        </Text>
      </Svg>

      <Svg width={200} height={200} viewBox='0 0 200 200'>
        <Circle
          id="textAlignmentHelper"
          cx={100}
          cy={100}
          r={80}
          fill="#0000ff50"
        />

        {/* This text is not shown at all on Android, and is hidden as expected on ios */}
        <Text textAnchor="end" fill="#FFF">
            <TextPath href="#textAlignmentHelper">
                End start text
            </TextPath>
        </Text>

        {/* This text is not shown at all on Android */}
        <Text textAnchor="end" fill="#FFF">
            <TextPath href="#textAlignmentHelper" startOffset="50%">
                End halfway text
            </TextPath>
        </Text>

        {/* This text is not shown at all on Android */}
        <Text textAnchor="end" fill="#FFF">
            <TextPath href="#textAlignmentHelper" startOffset="100%">
                End end text
            </TextPath>
        </Text>
      </Svg>

      <Svg width={200} height={100} viewBox="0 0 500 250">
        <Path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />

        <Text textAnchor="end" fill="#FFF" fontSize={26}>
          <TextPath alignment-baseline="top" href="#curve" startOffset="100%">
            This does work
          </TextPath>
        </Text>
      </Svg>
    </View>
  );
}
