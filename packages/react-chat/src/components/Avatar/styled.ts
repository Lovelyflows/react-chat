import { ClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/styles';

const tag = tagFactory(ClassName.AVATAR);

export const AvatarContainer = styled(tag('div'), {
  flexShrink: 0,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  variants: {
    size: {
      small: {
        height: 26,
        width: 26,
      },

      large: {
        height: '$xxl',
        width: '$xxl',
        boxSizing: 'border-box',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});
