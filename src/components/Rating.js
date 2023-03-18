import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

const RatingStars = ({size, isDisabled, defaultRating, ratingComplete}) => {
  const ratingbtn = React.useRef();

  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
    ratingbtn.current.handleOnPress();
  }

  return (
    <>
      {/* <AirbnbRating /> */}
      <View>
        <AirbnbRating
          count={5}
          defaultRating={defaultRating ? defaultRating : 0}
          size={size ? size : 15}
          showRating={false}
          isDisabled={isDisabled}
          onFinishRating={ratingCompleted}
        />
        {/* <Button ref={ratingbtn} onPress={ratingComplete('Hello')} /> */}
      </View>
      {/* <Rating
        showRating
        onFinishRating={ratingCompleted}
        style={{paddingVertical: 10}}
        type="rocket"
      /> */}
    </>
  );
};

export default RatingStars;
