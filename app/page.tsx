import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Say Hi',
    },
    {
      action: 'tx',
      label: 'Send Base Sepolia',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'ashudhewal.eth',
  description: 'LFG',
  openGraph: {
    title: 'ashudhewal.eth',
    description: 'DUDE',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>ashudhewal.eth</h1>
    </>
  );
}
