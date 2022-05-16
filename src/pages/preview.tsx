import type { Page } from 'client';
import { client } from 'client';
import { PageComponent } from './[...pageUri]';

export default function Preview() {
  const isLoading = client.useIsLoading();
  const { typeName, node } = client.auth.usePreviewNode();

  if (isLoading || node === undefined) {
    return <p>Loading...</p>;
  }

  if (node === null) {
    return <p>Post not found</p>;
  }

  switch (typeName) {
    case 'Page': {
      const page = node as Page;
      return <PageComponent page={page} />;
    }
    // Add custom post types here as needed
    default: {
      throw new Error(`Unknown post type: ${typeName}`);
    }
  }
}
