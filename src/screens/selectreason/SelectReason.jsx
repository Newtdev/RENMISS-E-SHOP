import {Pressable, SafeAreaView, Text, View} from 'react-native';
import ReasonOne from '../../assets/reasonOne';
import ReasonTwo from '../../assets/reasonTwo';
import {Card, HeaderWrapper} from '../../sharedcomponent';

const REASONDATA = [
  {
    name: 'Buy product and hire services',
    description:
      'Renmiss business will provide you with a wide varieties of product you can buy or help you hire verified services accross many different categories.',
    image: <ReasonOne />,
    id: 1,
    colors: {
      bg: '#D9E0F3',
      heading: '#000',
      description: '#474747',
    },
  },
  {
    name: 'Sell product or skills',
    description:
      'Display, advertise your skill for hiring and short service on our platform. You can also sell your listed product on our here with instant payment.',
    image: <ReasonTwo />,
    id: 2,
    colors: {
      bg: '#B70000',
      heading: '#fff',
      description: '#fff',
    },
  },
];

const ReasonCard = props => {
  const {name, description, image, colors, navigation, id} = props;
  return (
    <Card>
      <Pressable
        onPress={() => {
          if (id === 1) {
            navigation.navigate('Market');
          } else {
            navigation.navigate('Market');
          }
        }}
        className={` h-full flex flex-row justify-between rounded-[15px] p-4 cursor-pointer`}
        style={{backgroundColor: colors.bg}}>
        <View>{image}</View>
        <View className="h-36 w-72 flex flex-col justify-evenly pl-4 ">
          <Text
            className="text-[16px] font-bold text-black"
            style={{color: colors.heading}}>
            {name}
          </Text>
          <Text
            className="text-[15px] font-normal leading-[19px] text-[#474747]"
            style={{color: colors.description}}>
            {description}
          </Text>
        </View>
      </Pressable>
    </Card>
  );
};

const SelectReason = ({navigation}) => {
  return (
    <HeaderWrapper name="What do you want to do?">
      <View>
        {REASONDATA.map((data, index) => {
          const dataProps = {...data, navigation};
          return <ReasonCard key={index} {...dataProps} />;
        })}
      </View>
    </HeaderWrapper>
  );
};

export default SelectReason;
