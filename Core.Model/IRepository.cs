using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Core.Model
{
	public interface IRepository
	{
		int SaveChanges();
		void Dispose();
		EntityEntry<TEntity> Add<TEntity>(TEntity entity) where TEntity : class;
		void AddRange(IEnumerable<object> entities);
		void RemoveRange(IEnumerable<object> entities);
	}
}
