import Avatar from '@/components/Avatar';
import BaseButton from '@/components/Button';
import Icon from '@/components/Icon';
import { ClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/styles';
import { textOverflowStyles } from '@/styles/fragments';

const tag = tagFactory(ClassName.HEADER);

export const Title = styled(tag('h1', 'title'), {
  ...textOverflowStyles,
  typo: { size: 17, weight: '$2', height: '$2' },
  color: '$black',
  visibility: 'hidden',
});

export const Button = styled(tag(BaseButton.Reset, 'button'), {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 32,
  width: 32,
  marginLeft: 8,
  borderRadius: 6,
  background: 'none',
  trans: ['background-color'],

  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.05)',

    [`& ${Icon.Frame}`]: {
      color: '$black',
    },
  },

  [`& ${Icon.Frame}`]: {
    height: '$xxs',
    width: '$xxs',
    color: 'rgba(0,0,0,0.8)',
    trans: ['color'],
  },
});

export const Container = styled(tag('header'), {
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  height: '$lg',
  padding: '0 $4 0 $5',
  backgroundColor: '$white',
  boxShadow: '0 1px 5px $shadow12',

  [`& ${Avatar.Container}`]: {
    width: '100%',
    maxWidth: 150,
    backgroundSize: 'contain',
  },

  [`& ${Title}`]: {
    flex: 1,
    margin: '0 0 0 14px',
  },
});
