import { ClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/styles';

export const tag = tagFactory(ClassName.PROACTIVE_MESSAGE);

export const MessageContainer = styled(tag('div'), {
  maxWidth: 256,
  color: '#1A1E23',
  boxShadow: '$surfaceZ1Light',
  padding: '8px 15px',
  borderRadius: '$3',
  background: '$white',
  typo: { size: 14 },
});

export default MessageContainer;
