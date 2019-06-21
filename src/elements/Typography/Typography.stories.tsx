import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Paragraph from './Paragraph';
import EyebrowText from './EyebrowText';
import Heading from './Heading';
import { Box, Card } from '../../primitives';

const content = (
  <>
    <EyebrowText>Getting Your Eyebrows Done</EyebrowText>
    <Heading as="h1">Showing Off Your Heading</Heading>
    <Paragraph fontSize={3}>
      Cat ipsum dolor sit amet, cat is love, cat is life. Allways wanting food
      cat fur is the new black or i'm going to lap some water out of my master's
      cup meow, but kitty run to human with blood on mouth from frenzied attack
      on poor innocent mouse, don't i look cute?
    </Paragraph>
    <Heading as="h2">Showing Off Your Heading</Heading>
    <Paragraph>
      Meow meow mama step on your keyboard while you're gaming and then turn in
      a circle yet attack dog, run away and pretend to be victim yet warm up
      laptop with butt lick butt fart rainbows until owner yells pee in litter
      box hiss at cats my slave human didn't give me any food so i pooped on the
      floor. Lick sellotape toilet paper attack claws fluff everywhere meow miao
      french ciao litterbox give me some of your food give me some of your food
      give me some of your food meh, i don't want it behind the couch warm up
      laptop with butt lick butt fart rainbows until owner yells pee in litter
      box hiss at cats spill litter box, scratch at owner, destroy all
      furniture, especially couch and jump around on couch, meow constantly
      until given food, . Nya nya nyan mouse, yet ignore the squirrels, you'll
      never catch them anyway cat meoooow i iz master of hoomaan, not hoomaan
      master of i, oooh damn dat dog but stand in doorway, unwilling to chose
      whether to stay in or go out so claw drapes mark territory. Carefully
      drink from water glass and then spill it everywhere and proceed to lick
      the puddle. My left donut is missing, as is my right get suspicious of own
      shadow then go play with toilette paper so stand with legs in litter box,
      but poop outside for eat grass, throw it back up. Flop over lick arm hair
      and demand to be let outside at once, and expect owner to wait for me as i
      think about it or ask to go outside and ask to come inside and ask to go
      outside and ask to come inside.
    </Paragraph>
    <Heading as="h3">Showing Off Your Heading</Heading>
    <Paragraph>
      Cats secretly make all the worlds muffins purr as loud as possible, be the
      most annoying cat that you can, and, knock everything off the table so lay
      on arms while you're using the keyboard. Ignore the human until she needs
      to get up, then climb on her lap and sprawl run outside as soon as door
      open and when owners are asleep, cry for no apparent reason and let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway poop on couch or lie in the sink all day.
    </Paragraph>
    <Heading as="h4">Showing Off Your Heading</Heading>
    <Paragraph>
      Cats secretly make all the worlds muffins purr as loud as possible, be the
      most annoying cat that you can, and, knock everything off the table so lay
      on arms while you're using the keyboard. Ignore the human until she needs
      to get up, then climb on her lap and sprawl run outside as soon as door
      open and when owners are asleep, cry for no apparent reason and let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway poop on couch or lie in the sink all day.
    </Paragraph>
    <Heading as="h5">Showing Off Your Heading</Heading>
    <Paragraph>
      Cats secretly make all the worlds muffins purr as loud as possible, be the
      most annoying cat that you can, and, knock everything off the table so lay
      on arms while you're using the keyboard. Ignore the human until she needs
      to get up, then climb on her lap and sprawl run outside as soon as door
      open and when owners are asleep, cry for no apparent reason and let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway poop on couch or lie in the sink all day.
    </Paragraph>
    <Heading as="h6">Showing Off Your Heading</Heading>
    <Paragraph>
      Cats secretly make all the worlds muffins purr as loud as possible, be the
      most annoying cat that you can, and, knock everything off the table so lay
      on arms while you're using the keyboard. Ignore the human until she needs
      to get up, then climb on her lap and sprawl run outside as soon as door
      open and when owners are asleep, cry for no apparent reason and let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway poop on couch or lie in the sink all day.
    </Paragraph>
  </>
);

storiesOf('Elements/Typography', module)
  .add('Typography Example', () => (
    <Box width={1 / 2} margin="auto" pt={4}>
      {content}
    </Box>
  ))
  .add('Basic Example on Card', () => (
    <Box bg="gray.4" p={4}>
      <Card width={2 / 3} m="auto">
        {content}
      </Card>
    </Box>
  ));
