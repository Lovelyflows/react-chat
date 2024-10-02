import { ClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/styles';

const tag = tagFactory(ClassName.LAUNCHER);

export const Button = styled(tag('button'), {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$round',
  backgroundColor: '$white',
  trans: ['background-color', 'box-shadow'],

  height: '$xxl',
  width: '$xxl',
  border: 'none',
  boxShadow: '0 1px 6px $shadow6, 0 2px 24px $shadow8',

  '&:focus': {
    outline: 0,
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$lightGrey',
  },

  '& > img': {
    width: '$sm',
    height: '$sm',
  },

  padding: 0,
  margin: 0,
});
