import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { blue, cyan } from '../utils/colors';
import CardA from './CardA';
import CardQ from './CardQ';

const questions = [
    {
      question: 'What is React?',
      answer: 'A library for managing user interfaces'
    },
    {
      question: 'Where do you make Ajax requests in React?',
      answer: 'The componentDidMount lifecycle event'
    }
  ];

const cardObj = questions[0];

const _CardNavigator = createStackNavigator(
    routes = {
        "Question": CardQ,
        "Answer": CardA,
    },
    config = {},
);

export default createAppContainer(_CardNavigator);



