/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Textarea from './Textarea';
import UIStrings from "../../../constants/UIStrings";

describe('Textarea', () => {
  it('renders correctly without an error message', () => {
    const {container, queryByText} = render(<Textarea />);

    expect(queryByText(UIStrings.ERROR.FIELD_REQUIRED)).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders with an error message', () => {
    const {container, queryByText} = render(<Textarea isRequired />);

    expect(queryByText(UIStrings.ERROR.FIELD_REQUIRED)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('hides the error message when the value is required and not empty', () => {
    const {queryByText} = render(<Textarea isRequired value="value" onChange={() =>{}}/>);

    expect(queryByText(UIStrings.ERROR.FIELD_REQUIRED)).not.toBeInTheDocument();
  });

  it('shows the error message when the value is required but empty', () => {
    const {queryByText} = render(<Textarea isRequired value="" onChange={() =>{}}/>);

    expect(queryByText(UIStrings.ERROR.FIELD_REQUIRED)).toBeInTheDocument();
  });
});
