import { ClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/styles';

export const tag = tagFactory(ClassName.MESSAGE);

export const Container = styled(tag('div'), {
  display: 'inline-block',
  boxSizing: 'border-box',
  padding: '8px 15px',
  borderRadius: '$3',
  typo: {},
  overflowWrap: 'anywhere',
});
