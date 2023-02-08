import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper';
import { ProgressBarComponent } from 'Component/ProgressBar/ProgressBar.component';

/** @namespace ScandiwebTask/Route/Checkout/Component */
export class CheckoutComponent extends SourceCheckout {
    render() {
        const { checkoutStep } = this.props;

        const steps = Object.keys(this.stepMap).map(item => item.split("_")[0].toLowerCase());

        return (
            <main block="Checkout">
                <ProgressBarComponent 
                    steps={steps}
                    active={checkoutStep.split("_")[0].toLowerCase()}
                />;
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
