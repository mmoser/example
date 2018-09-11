using NUnit.Framework;

namespace Platform.TestHelpers
{
	[TestFixture]
	public abstract class SpecificationContext
	{
		protected virtual void Context() { }
		protected virtual void Because() { }

		[OneTimeSetUp]
		public void Setup()
		{
			Context();
			Because();
		}

		protected virtual void Cleanup() { }

		[OneTimeTearDown]
		public void Teardown()
		{
			Cleanup();
		}
	}
}
