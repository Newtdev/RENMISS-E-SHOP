import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

const RatingStars = ({
  size,
  isDisabled,
  defaultRating,
  ratingCount,
  showRating,
}) => {
  function ratingCompleted(rating) {
    // console.log('Rating is: ' + rating);
    ratingCount(rating);
  }

  return (
    <>
      {/* <AirbnbRating /> */}
      <View>
        <AirbnbRating
          count={5}
          defaultRating={defaultRating ? defaultRating : 0}
          size={size ? size : 15}
          showRating={showRating ? true : false}
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
