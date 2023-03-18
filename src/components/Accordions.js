import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {COLORS} from '../utils/Colors';
import {DefaultCard} from './Cards';
import {List} from 'react-native-paper';

const AccordionSection = ({data}) => {
  // let AccordionListCount = Array.from(Array(1), (_, i) => i + 1);
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <List.Section title="" className="space-y-1">
        {data?.map((item, i) => {
          return (
            <>
              {i === data.length - 1 ? (
                <List.Accordion
                  key={i}
                  title={item?.title}
                  left={
                    item?.icon
                      ? props => <List.Icon {...props} icon={item?.icon} />
                      : null
                  }
                  style={{
                    backgroundColor: COLORS.gray,
                    borderRadius: 10,
                    marginTop: 3,
                  }}
                  theme={{colors: {primary: COLORS.wallet}}}
                  expanded={expanded}
                  onPress={handlePress}
                  children={item?.element}
                />
              ) : (
                <List.Accordion
                  key={i}
                  title={item?.title}
                  left={
                    item?.icon
                      ? props => <List.Icon {...props} icon={item?.icon} />
                      : null
                  }
                  style={{
                    backgroundColor: COLORS.gray,
                    borderRadius: 10,
                    marginBottom: 3,
                  }}
                  theme={{colors: {primary: COLORS.wallet}}}
                  children={item?.element}
                />
              )}
            </>
          );
        })}
      </List.Section>
    </View>
  );
};

export const SingleAccordion = ({children, handlePress, expanded}) => {
  return (
    <List.Section>
      <List.Accordion
        title="Product variation"
        titleStyle={{color: COLORS.black, fontSize: 14}}
        expanded={expanded}
        onPress={handlePress}>
        {children}
      </List.Accordion>
    </List.Section>
  );
};

export default AccordionSection;
