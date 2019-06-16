import TestRenderer from 'react-test-renderer';

export const renderJSON = el => TestRenderer.create(el).toJSON();
