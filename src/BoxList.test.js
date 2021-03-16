import { render } from "@testing-library/react";
import BoxList from './BoxList';

it('should render without crashing', function() {
    render(<BoxList />)
})

it('should match snapshot', function() {
    const { asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

