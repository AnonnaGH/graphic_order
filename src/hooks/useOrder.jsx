import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useOrder = () => {


const { user, loading } = useAuth();
    //   const token = localStorage.getItem('access-token');

    const [axiosSecure] = useAxiosSecure();
      const { refetch, data: order = [] } = useQuery({
        queryKey: ['order', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
     
        queryFn: async () => {
            const res = await axiosSecure(`/order?email=${user?.email}`)
           
            return res.data;
        },
    })

    return [order, refetch]
}

export default useOrder;